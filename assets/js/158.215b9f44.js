(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{473:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装-rust"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-rust"}},[s._v("#")]),s._v(" 安装 Rust")]),s._v(" "),t("p",[t("code",[s._v("rustup")]),s._v(" 是 Rust 的安装程序，也是它的版本管理程序。 强烈建议使用 "),t("code",[s._v("rustup")]),s._v(" 来安装 Rust，当然如果你有异心，请寻找其它安装方式，然后再从下一节开始阅读。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：如果你不想用或者不能用 rustup，请参见 Rust 其它安装方法。")])]),s._v(" "),t("p",[s._v("至于版本，现在 Rust 稳定版特性越来越全了，因此下载最新稳定版本即可。由于你用的 Rust 版本可能跟本书写作时不一样，一些编译错误和警告可能也会有所不同。")]),s._v(" "),t("h3",{attrs:{id:"在-linux-或-macos-上安装-rustup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-或-macos-上安装-rustup"}},[s._v("#")]),s._v(" 在 Linux 或 macOS 上安装 rustup")]),s._v(" "),t("p",[s._v("打开终端并输入下面命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--proto")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=https'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tlsv1.2")]),s._v(" https://sh.rustup.rs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令将下载一个脚本并开始安装 rustup 工具，此工具将安装 Rust 的最新稳定版本。可能会提示你输入管理员密码。")]),s._v(" "),t("p",[s._v("如果安装成功，将出现下面这行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Rust is installed now. Great"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("OK, 这样就已经完成 Rust 安装啦。")]),s._v(" "),t("h4",{attrs:{id:"安装-c-语言编译器-非必需"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-c-语言编译器-非必需"}},[s._v("#")]),s._v(" 安装 C 语言编译器：（非必需）")]),s._v(" "),t("p",[s._v("Rust 对运行环境的依赖和 Go 语言很像，几乎所有环境都可以无需安装任何依赖直接运行。但是，Rust 会依赖 libc 和链接器 linker。所以如果遇到了提示链接器无法执行的错误，你需要再手动安装一个 C 语言编译器：")]),s._v(" "),t("ul",[t("li",[s._v("macOS 下：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ xcode-select "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Linux 下：")])]),s._v(" "),t("p",[s._v("Linux 用户一般应按照相应发行版的文档来安装 GCC 或 Clang。")]),s._v(" "),t("p",[s._v("例如，如果你使用 Ubuntu，则可安装 build-essential。")]),s._v(" "),t("h3",{attrs:{id:"在-windows-上安装-rustup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-上安装-rustup"}},[s._v("#")]),s._v(" 在 Windows 上安装 rustup")]),s._v(" "),t("p",[s._v("Windows 上安装 Rust 需要有 C++ 环境，以下为安装的两种方式：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("x86_64-pc-windows-msvc")]),s._v("（官方推荐）")])]),s._v(" "),t("p",[s._v("先安装 "),t("a",{attrs:{href:"https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microsoft C++ Build Tools"),t("OutboundLink")],1),s._v("，勾选安装 C++ 环境即可。安装时可自行修改缓存路径与安装路径，避免占用过多 C 盘空间。安装完成后，Rust 所需的 msvc 命令行程序需要手动添加到环境变量中，否则安装 Rust 时 "),t("code",[s._v("rustup-init")]),s._v(" 会提示未安装 "),t("code",[s._v("Microsoft C++ Build Tools")]),s._v("，其位于："),t("code",[s._v("%Visual Studio 安装位置%\\VC\\Tools\\MSVC\\%version%\\bin\\Hostx64\\x64")]),s._v("（请自行替换其中的 "),t("code",[s._v("%Visual Studio")]),s._v(" 安装位置"),t("code",[s._v("%、%version%")]),s._v(" 字段）下。")]),s._v(" "),t("p",[s._v("如果你不想这么做，可以选择安装 Microsoft C++ Build Tools 新增的“定制”终端 "),t("code",[s._v("Developer Command Prompt for %Visual Studio version%")]),s._v(" 或 "),t("code",[s._v("Developer PowerShell for %Visual Studio version%")]),s._v("，在其中运行 "),t("code",[s._v("rustup-init.exe")]),s._v("。")]),s._v(" "),t("p",[s._v("准备好 C++ 环境后开始安装 Rust：")]),s._v(" "),t("p",[s._v("在 "),t("a",{attrs:{href:"https://www.rust-lang.org/learn/get-started",target:"_blank",rel:"noopener noreferrer"}},[s._v("RUSTUP-INIT"),t("OutboundLink")],1),s._v(" 下载系统相对应的 Rust 安装程序，一路默认即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PS C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Hehongyuan"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rustup-init.exe\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nCurrent installation options:\n\n   default "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple: x86_64-pc-windows-msvc\n     default toolchain: stable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n               profile: default\n  modify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Proceed with installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Customize installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cancel installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、x86_64-pc-windows-gnu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("x86_64-pc-windows-gnu")])])]),s._v(" "),t("p",[s._v("相比于 MSVC 版本来说，GNU 版本具有更轻量，更靠近 Linux 的优势。")]),s._v(" "),t("p",[s._v("首先，根据 "),t("a",{attrs:{href:"https://www.msys2.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MSYS2 官网"),t("OutboundLink")],1),s._v(" 配置 MSYS。")]),s._v(" "),t("p",[s._v("若您觉得下载太慢，可以试试由 "),t("a",{attrs:{href:"https://github.com/Caviar-X",target:"_blank",rel:"noopener noreferrer"}},[s._v("Caviar-X"),t("OutboundLink")],1),s._v(" 提供的 "),t("a",{attrs:{href:"https://github.pigeons.icu/msys2/msys2-installer/releases/download/2021-11-30/msys2-x86_64-20211130.exe",target:"_blank",rel:"noopener noreferrer"}},[s._v("代理"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("在安装 "),t("code",[s._v("mingw-toolchain")]),s._v(" 后，请将 "),t("code",[s._v("%MSYS 安装路径%\\mingw64\\bin")]),s._v(" 添加到系统变量 "),t("code",[s._v("PATH")]),s._v(" 中。")]),s._v(" "),t("p",[s._v("配置好后，在 MSYS 中输入下面的命令来安装 rustup。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://sh.rustup.rs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("之后，根据以下输出进行配置。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Current installation options:\n\n   default "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple: x86_64-pc-windows-msvc\n     default toolchain: stable "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n               profile: default\n  modify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Proceed with installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Customize installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cancel installation\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\nI'm going to ask you the value of each of these installation options.\nYou may simply press the Enter key to leave unchanged.\n\nDefault "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x86_64-pc-windows-msvc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nx86_64-pc-windows-gnu\n\nDefault toolchain? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stable/beta/nightly/none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("stable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nstable\n\nProfile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("which tools and data to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimal/default/complete"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ncomplete\n\nModify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nY\n\nCurrent installation options:\n\n   default "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple: x86_64-pc-windows-gnu\n     default toolchain: stable\n               profile: complete\n  modify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable: "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Proceed with installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Customize installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cancel installation\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("p",[s._v("再之后，按下 1，等待。完成后，您就已经安装了 Rust 和 "),t("code",[s._v("rustup")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("p",[s._v("要卸载 Rust 和 rustup，在终端执行以下命令即可卸载：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ rustup self uninstall\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"检查安装是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查安装是否成功"}},[s._v("#")]),s._v(" 检查安装是否成功")]),s._v(" "),t("p",[s._v("检查是否正确安装了 Rust，可打开终端并输入下面这行，此时能看到最新发布的稳定版本的版本号、提交哈希值和提交日期：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ rustc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\nrustc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.56")]),s._v(".1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("59eed8a2a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-11-01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cargo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.57")]),s._v(".0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b2e52d7ca "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-10-21"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("注：若发现版本号不同，以您的版本号为准")])]),s._v(" "),t("p",[s._v("恭喜，你已成功安装 Rust！如果没看到此信息，并且你使用的是 Windows，请检查 Rust 或 "),t("code",[s._v("%USERPROFILE%\\.cargo\\bin")]),s._v(" 是否在 "),t("code",[s._v("%PATH%")]),s._v(" 系统变量中。")]),s._v(" "),t("p",[s._v("如果都正确，但 Rust 仍然无法正常工作，那么你可以在很多地方获得帮助。")]),s._v(" "),t("h2",{attrs:{id:"本地文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地文档"}},[s._v("#")]),s._v(" 本地文档")]),s._v(" "),t("p",[s._v("安装 Rust 的同时也会在本地安装一个文档服务，方便我们离线阅读：运行 "),t("code",[s._v("rustup doc")]),s._v(" 让浏览器打开本地文档。")]),s._v(" "),t("p",[s._v("每当遇到标准库提供的类型或函数不知道怎么用时，都可以在 API 文档中查找到！具体参见 "),t("a",{attrs:{href:"https://course.rs/std/search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("在标准库寻找你想要的内容"),t("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);