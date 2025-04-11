# 📘 使用文档 - `yang-eventemitter`

`yang-eventemitter` 是一个用 TypeScript 编写的轻量级事件发布订阅工具，适合前端和 Node.js 项目使用，支持注册、触发、取消监听器等功能。

---

## 📦 安装

```bash
npm install yang-eventemitter
```

或

```bash
yarn add yang-eventemitter
```

---

## 🔰 快速开始

### 引入并初始化

```ts
import EventEmitter from 'yang-eventemitter';

const emitter = new EventEmitter();
```

---

## 🔄 注册事件

使用 `on` 方法注册事件监听器：

```ts
emitter.on('login', (username) => {
  console.log(`${username} 登录成功`);
});
```

你可以注册多个事件或多个监听器：

```ts
emitter.on('login', () => console.log('另一个登录监听器'));
emitter.on('logout', () => console.log('退出事件监听器'));
```

---

## 🚀 触发事件

使用 `emit` 方法触发事件：

```ts
emitter.emit('login', '张三');
// 输出:
// 张三 登录成功
// 另一个登录监听器
```

你可以传递任意数量的参数：

```ts
emitter.on('message', (from, text) => {
  console.log(`${from} 说：${text}`);
});

emitter.emit('message', '李四', '你好呀');
```

---

## ❌ 取消监听器

使用 `off` 方法移除指定监听器：

```ts
function onLogin() {
  console.log('登录了');
}

emitter.on('login', onLogin);
emitter.off('login', onLogin);

emitter.emit('login'); // 没有输出
```

> 注意：`off` 只能移除注册时使用的同一个函数引用。

---

## 🧱 类型定义（TypeScript）

```ts
type EventCallback = (...args: any[]) => void;
```

支持自动类型推导和参数传递。

---

## 🌍 应用场景

- 前端组件通信（无第三方依赖）
- 跨模块事件派发
- Node.js 脚本消息通知
- 简易状态管理中间层

---

## 📌 示例：计数器模块通信

```ts
// counter.ts
import EventEmitter from 'yang-eventemitter';

export const counterEmitter = new EventEmitter();

export function increment() {
  counterEmitter.emit('change', 1);
}

// ui.ts
import { counterEmitter } from './counter';

counterEmitter.on('change', (step: number) => {
  console.log(`增加了 ${step}`);
});
```
