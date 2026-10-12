# 🎨 Chalkora

### Make your terminal logs beautiful.

**Chalkora** is a lightweight, colorful, and developer-friendly logging utility for Node.js and TypeScript. It makes terminal output clean and readable with colored log levels, icons, custom prefixes, timestamps, and dynamic borders.

## ✨ Features

- 🎨 Colorful and readable terminal logs
- ✅ Success, Error, Info, Warning, and Debug levels
- 🕒 Optional timestamps
- 🏷️ Custom log prefixes
- 📏 Dynamic horizontal borders
- 📝 Multiline message support
- 💪 TypeScript support
- ⚡ Simple and easy-to-use API
- 🪶 Lightweight dependency footprint

## 📦 Installation

```bash
npm install chalkora
```

## 🚀 Quick Start

```typescript
import { success, error, info, warning } from "chalkora";

success("Application started successfully!");
error("Database connection failed!");
info("Server is running on port 3000");
warning("Memory usage is high");
```

## 🖥️ Example Output

```text
------------------------------------------------
[APP]  ✔ SUCCESS  -  Application started!
------------------------------------------------

------------------------------------------------
[APP]  ✖ ERROR  -  Database connection failed!
------------------------------------------------

------------------------------------------------
[APP]  ℹ INFO  -  Server is running on port 3000
------------------------------------------------
```

Colors and border widths may vary depending on your terminal and message length.

## ⚙️ Custom Options

### Custom Prefix

```typescript
import { info } from "chalkora";

info("Payment service started", {
  prefix: "PAYMENT",
});
```

### Enable Timestamp

```typescript
import { success } from "chalkora";

success("Payment completed", {
  prefix: "PAYMENT",
  timestamp: true,
});
```

### Multiline Messages

```typescript
import { info } from "chalkora";

info(`Build completed
All files compiled
Ready to deploy`);
```

## 📚 API Reference

| Method                       | Description                                                         |
| ---------------------------- | ------------------------------------------------------------------- |
| `success(message, options?)` | Log a successful operation                                          |
| `error(message, options?)`   | Log an error                                                        |
| `info(message, options?)`    | Log general information                                             |
| `warning(message, options?)` | Log a warning                                                       |
| `debug(message, options?)`   | Log development information, if supported by your installed version |

### Options

| Option      | Type      | Default |
| ----------- | --------- | ------- |
| `prefix`    | `string`  | `"APP"` |
| `timestamp` | `boolean` | `false` |

## 🛠️ Requirements

- Node.js 20 or newer
- An ES module-compatible project

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## 📄 License

MIT

## ⭐ Support

If you find Chalkora useful, consider starring the project on GitHub and sharing it with other developers.

**Chalkora — Make every log clearer.**
