# 🐱 Cat-Pi / 猫派

> **Cat-Pi 就是原版 Pi，一行命令，开箱即用。**
> **Cat-Pi is the original Pi — one command, ready to go.**

你运行的就是 Pi 本身，只是预装了几个基础增强，省去手动配置。零魔改，零锁定，随时可以用回裸 `pi`。

You're running Pi itself, with a few basic enhancements pre-installed. No fork, no lock-in — fall back to bare `pi` anytime.

---

## 安装 / Install

```bash
npm install -g @tropical_meow/cat-pi
cat-pi
```

装完即用，不需要任何额外配置。里面就一个原版 Pi。

---

## 多装了什么 / What's Pre-installed

**就三个基础功能，纯原版增强：**

| 功能 | 说明 | 怎么用 |
|------|------|--------|
| 📋 计划模式 | 让模型先规划再执行，防手滑 | `cat-pi --plan` 或 `/plan` |
| 🗑️ 回收站 | `edit`/`write` 改动的文件自动备份，随时恢复 | `/trash` |
| 🌳 会话预览 | 树形浏览历史会话 | `/armory` |

没了。就这些。其他一切都是原版 Pi。

That's it. Everything else is stock Pi.

---

## 和原版 Pi 的关系

```
cat-pi = pi + 三个基础增强
```

- **不是 fork**，没有魔改 Pi 的任何代码
- `bin/cat-pi.js` 就一行：`import { main } from "@mariozechner/pi-coding-agent"; main(...)`
- 随时可以卸载 cat-pi，直接用 `pi`，功能不受影响
- 增强只是通过 Pi 的扩展机制加载，和原版完全兼容

---

## 升级 / Update

```bash
/cat-update
```

或：

```bash
npm update -g @tropical_meow/cat-pi
```

---

## 卸载 / Uninstall

```bash
npm uninstall -g @tropical_meow/cat-pi
```

卸载后 `pi` 命令仍然可用（如果你装过），所有会话数据完好。
