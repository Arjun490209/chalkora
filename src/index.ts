import chalk from "chalk";

const log = console.log;

type ActionType = "SUCCESS" | "ERROR" | "INFO" | "WARNING";

const actionColor = (action: ActionType) => {
  switch (action) {
    case "SUCCESS":
      return chalk.green.bold;
    case "ERROR":
      return chalk.red.bold;
    case "INFO":
      return chalk.blue.bold;
    case "WARNING":
      return chalk.yellow.bold;
    default:
      return chalk.white.bold;
  }
};

const actionIcon = (action: ActionType): string => {
  switch (action) {
    case "SUCCESS":
      return "✔";
    case "ERROR":
      return "✖";
    case "INFO":
      return "ℹ";
    case "WARNING":
      return "⚠";
    default:
      return "•";
  }
};

interface HandlerOptions {
  prefix?: string;
  timestamp?: boolean;
}

const handler = (
  msg: string,
  action: ActionType,
  options: HandlerOptions = {},
): void => {
  const { prefix = "APP", timestamp = false } = options;

  const color = actionColor(action);
  const icon = actionIcon(action);
  const time = timestamp ? new Date().toLocaleTimeString("en-GB") : "";

  const lines = msg.split("\n");
  const title = `${icon} ${action}`;

  const header = [time, `[${prefix}]`, title, "-", lines[0] ?? ""]
    .filter(Boolean)
    .join("  ");

  const width = Math.max(
    48,
    header.length + 4,
    ...lines.map((line) => line.length + 4),
  );

  const border = chalk.gray("-".repeat(width));

  log();
  log(border);

  log(
    [
      time ? chalk.gray(time) : "",
      chalk.magenta.bold(`[${prefix}]`),
      color(title),
      chalk.gray("-"),
      chalk.white(lines[0] ?? ""),
    ]
      .filter(Boolean)
      .join("  "),
  );

  for (const line of lines.slice(1)) {
    log(`  ${chalk.white(line)}`);
  }

  log(border);
  log();
};

export const success = (message: string, options?: HandlerOptions): void => {
  handler(message, "SUCCESS", options);
};

export const error = (message: string, options?: HandlerOptions): void => {
  handler(message, "ERROR", options);
};

export const info = (message: string, options?: HandlerOptions): void => {
  handler(message, "INFO", options);
};

export const warning = (message: string, options?: HandlerOptions): void => {
  handler(message, "WARNING", options);
};

export default handler;
