---
title: 'Next.js 15のインストールでいろいろ聞かれるのは何を設定しているのかちゃんと理解しよう'
date: '2025-2-24'
description: 'Next.jsインストールの時にいろいろ聞かれるのちゃんとわかってますか？きちんと解説します。'
tags: ['nextjs','環境構築']
---

Next.jsのインストール時にいろいろ聞かれるけど適当にYes押してないですか？内容を一つずつきちんと解説します。

## システム要件
[Node.js](https://nodejs.org/ja) 18.18またはそれ以降

## 前提知識
npm 

# Nextjsのインストールの流れ
まず、nextjsには「自動インストール」と「手動インストール」が存在します。


## 自動インストール
## 


プロジェクトを作りたいディレクトリで以下を実行すると自動的にインストールが始まる。

```
npx create-next-app@latest
```



以下を聞かれる
```
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```



