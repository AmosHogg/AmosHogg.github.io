(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{479:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、if-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、if-表达式"}},[s._v("#")]),s._v(" 一、if 表达式")]),s._v(" "),t("ul",[t("li",[s._v("表达式允许您根据条件来执行不同的代码分支\n"),t("ul",[t("li",[s._v("这个条件必须是 bool 类型")])])]),s._v(" "),t("li",[s._v("计表达式中，与条件想关联的代码块就叫做分支 (arm)")]),s._v(" "),t("li",[s._v("可选的，在后边可以加上一个 else 表达式")])]),s._v(" "),t("h3",{attrs:{id:"_1-1-使用-else-if-处理多重条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-使用-else-if-处理多重条件"}},[s._v("#")]),s._v(" 1.1 使用 else if 处理多重条件")]),s._v(" "),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"condition was true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"condition was true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"condition was false"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("但如果使用了多于一个 else f，那么最好使用 match 来重构代码")]),s._v(" "),t("h3",{attrs:{id:"_1-2-在-let-语句中使用-if"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在-let-语句中使用-if"}},[s._v("#")]),s._v(" 1.2 在 let 语句中使用 if")]),s._v(" "),t("p",[s._v("因为计是一个表达式，所以可以将它放在 let 语句中等号的右边。")]),s._v(" "),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" condition "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" condition "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[t("strong",[s._v("注意：")]),s._v("\nif 语句 的返回值类型必须一致")])]),s._v(" "),t("h2",{attrs:{id:"二、rust-的循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、rust-的循环"}},[s._v("#")]),s._v(" 二、Rust 的循环")]),s._v(" "),t("p",[s._v("Rust 提供了3种循环: loop、while 和 for。")]),s._v(" "),t("h3",{attrs:{id:"_2-1-loop-循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-loop-循环"}},[s._v("#")]),s._v(" 2.1 loop 循环")]),s._v(" "),t("p",[s._v("loop 关键字告诉 Rus+ 反复的执行一块代码，直到你喊停。")]),s._v(" "),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("loop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        counter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" counter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v(" counter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"_2-2-while-条件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-while-条件循环"}},[s._v("#")]),s._v(" 2.2 while 条件循环")]),s._v(" "),t("p",[s._v("另外一种常见的循环模式是每次执行循环体之前都判断一次条件（while 循环）。")]),s._v(" "),t("h3",{attrs:{id:"_2-3-使用-for-循环遍历集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用-for-循环遍历集合"}},[s._v("#")]),s._v(" 2.3 使用 for 循环遍历集合")]),s._v(" "),t("ul",[t("li",[s._v("可以使用 while 或 loop 来遍历集合，但是易错且低效。")]),s._v(" "),t("li",[s._v("使用 for 循环更简洁紧凑，它可以针对集合中的每个元素来执行一些代码。")]),s._v(" "),t("li",[s._v("由于 for 循环的安全、简洁性，所以它在 Rust 里用的最多")])]),s._v(" "),t("h4",{attrs:{id:"range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range"}},[s._v("#")]),s._v(" Range")]),s._v(" "),t("ul",[t("li",[s._v("标准库提供")]),s._v(" "),t("li",[s._v("指定一个开始数字和一个结束数字，Range 可以生成它们之间的数字（不含结束")]),s._v(" "),t("li",[s._v("rev 方法可以反转 Range")])])])}),[],!1,null,null,null);t.default=e.exports}}]);