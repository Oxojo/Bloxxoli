import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import katex from "lume/plugins/katex.ts";

const site = lume();
site
  .use(katex({
    options: {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        // インライン数式のために必要、$$の上に書くと先に$がマッチしてしまうので下に書くこと
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        {
          left: "\\begin{equation}",
          right: "\\end{equation}",
          display: true,
        },
        { left: "\\begin{align}", right: "\\end{align}", display: true },
        { left: "\\begin{alignat}", right: "\\end{alignat}", display: true },
        { left: "\\begin{gather}", right: "\\end{gather}", display: true },
        { left: "\\begin{CD}", right: "\\end{CD}", display: true },
        { left: "\\[", right: "\\]", display: true },
      ],
    },
  })).use(blog());

export default site;
