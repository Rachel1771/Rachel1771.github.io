import React from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common"; // 导入当前主题 API

export default function GiscusComponent() {
  const {colorMode} = useColorMode(); // 获取当前主题
  return (
    // 前面放一个带 margin 的 div，美观
    <div style={{
        marginTop: "3rem",
        width: "75%",
        overflow: "hidden",}}>
      <Giscus
        repo="Rachel1771/Rachel1771.github.io"
        repoId="R_kgDOJem5ng"
        category="Announcements"
        categoryId="DIC_kwDOJem5ns4Cll0K"
        mapping="title"
        term="Welcome to @giscus/react component!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode} // 根据当前主题设置
        lang="zh-CN"
        crossorigin="anonymous"
        async
      />
    </div>
  );
}