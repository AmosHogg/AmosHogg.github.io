(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{475:function(a,r,_){"use strict";_.r(r);var e=_(3),s=Object(e.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"hello-cargo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hello-cargo"}},[a._v("#")]),a._v(" Hello, Cargo")]),a._v(" "),r("ul",[r("li",[a._v("Cargo是 Rust 的构建系统和包管理工具构建代码、下载依赖的库、构建这些库…")]),a._v(" "),r("li",[a._v("安装 Rust 的时候会安装 Cargo\n"),r("ul",[r("li",[r("code",[a._v("Cargo -version")])])])])]),a._v(" "),r("h2",{attrs:{id:"使用-cargo-创建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-cargo-创建项目"}},[a._v("#")]),a._v(" 使用 Cargo 创建项目")]),a._v(" "),r("ul",[r("li",[a._v("创建项目："),r("code",[a._v("cargo new hello_cargo")]),a._v(" "),r("ul",[r("li",[a._v("项目名称也是 "),r("code",[a._v("hello_cargo")])]),a._v(" "),r("li",[a._v("会创建一个新的目录 "),r("code",[a._v("hello_cargo")]),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n├── .git\n├── .gitignore "),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化了一个新的 Git 仓库")]),a._v("\n├── Cargo.toml\n└── src\n    └── main.rs\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br")])])])])])]),a._v(" "),r("h3",{attrs:{id:"cargo-toml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cargo-toml"}},[a._v("#")]),a._v(" Cargo.toml")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://jihulab.com/AmosHogg/picbed/-/raw/main/pictures/2023/05/1_17_24_52_202305011724066.png",alt:"Cargo.toml"}})]),a._v(" "),r("ul",[r("li",[a._v("TOML（Tom's Obvious, Minimal Language）格式，是 Cargo 的配置格式")]),a._v(" "),r("li",[a._v("[pacakgel]，是一个区域标题，表示下方内容是用来配置包 （package）的\n"),r("ul",[r("li",[a._v("name，项目名")]),a._v(" "),r("li",[a._v("version，项目版本")]),a._v(" "),r("li",[a._v("authors，项目作者")]),a._v(" "),r("li",[a._v("edition，使用的 Rust 版本")])])]),a._v(" "),r("li",[a._v("[dependencies]，另一个区域的开始， 它会列出项目的依赖项。")]),a._v(" "),r("li",[a._v("在 Rust 里面，代码的包称作 crate。")])]),a._v(" "),r("h3",{attrs:{id:"src-main-rs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#src-main-rs"}},[a._v("#")]),a._v(" src/main.rs")]),a._v(" "),r("ul",[r("li",[a._v("cargo 生成的 main.rs 在 src 目录下")]),a._v(" "),r("li",[a._v("而 Cargo.toml 在项目顶层下")]),a._v(" "),r("li",[a._v("源代码都应该在 src 目录下")]),a._v(" "),r("li",[a._v("顶层目录可以放置：README、许可信息、配置文件和其它与程序源码无关的文件")]),a._v(" "),r("li",[a._v("如果创建项目时没有使用 cargo，也可以把项目转化为使用 cargo：\n"),r("ul",[r("li",[a._v("把源代码文件移动到 "),r("code",[a._v("src")]),a._v(" 下")]),a._v(" "),r("li",[a._v("创建 "),r("code",[a._v("Cargo.toml")]),a._v(" 并填写相应的配置")])])])]),a._v(" "),r("h2",{attrs:{id:"构建-cargo-项目-cargo-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建-cargo-项目-cargo-build"}},[a._v("#")]),a._v(" 构建 Cargo 项目 cargo build")]),a._v(" "),r("ul",[r("li",[a._v("cargo build\n"),r("ul",[r("li",[a._v("创建可执行文件： "),r("code",[a._v("target/debug/hello_cargo")]),a._v(" 或 "),r("code",[a._v("target ldebug \\hello_cargo.exe")]),a._v(" ( Windows)")]),a._v(" "),r("li",[a._v("运行可执行文件："),r("code",[a._v("./target/debug/hello_cargo")]),a._v("或 "),r("code",[a._v("./target/debug/hello_cargo.exe")]),a._v(" (Windows)")])])]),a._v(" "),r("li",[a._v("第一次运行 cargo build 会在顶层目录生成 cargo.lock 文件\n"),r("ul",[r("li",[a._v("该文件负责追踪项目依赖的精确版本")]),a._v(" "),r("li",[a._v("不需要手动修改该文件")])])])]),a._v(" "),r("h2",{attrs:{id:"构建和运行-cargo-项目-cargo-run"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建和运行-cargo-项目-cargo-run"}},[a._v("#")]),a._v(" 构建和运行 cargo 项目 cargo run")]),a._v(" "),r("p",[r("code",[a._v("cargo run")]),a._v("，编译代码＋执行结果")]),a._v(" "),r("p",[a._v("如果之前编译成功过，并且源码没有改变，那么就会直接运行二进制文件")]),a._v(" "),r("h2",{attrs:{id:"cargo-check"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cargo-check"}},[a._v("#")]),a._v(" cargo check")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("cargo check")]),a._v("，检查代码，确保能通过编译，但是不产生任何可执行文件")]),a._v(" "),r("li",[r("code",[a._v("cargo check")]),a._v(" 要比 "),r("code",[a._v("cargo build")]),a._v(" 快得多\n"),r("ul",[r("li",[a._v("编写代码的时候可以连续反复的使用 "),r("code",[a._v("cargo check")]),a._v(" 检查代码，提高效率")])])])]),a._v(" "),r("h2",{attrs:{id:"为发布构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为发布构建"}},[a._v("#")]),a._v(" 为发布构建")]),a._v(" "),r("p",[r("code",[a._v("cargo build --release")]),a._v(": 编译时会进行优化（代码会运行的更快，但是编译时间更长），会在 "),r("code",[a._v("target/release")]),a._v(" 而不是 "),r("code",[a._v("target/debug")]),a._v(" 生成可执行文件")]),a._v(" "),r("p",[a._v("两个配置：一个开发，一个发布")])])}),[],!1,null,null,null);r.default=s.exports}}]);