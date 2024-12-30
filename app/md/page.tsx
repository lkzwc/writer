'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function MarkdownEditor() {
    const [markdownContent, setMarkdownContent] = useState('# 欢迎来到Markdown编辑器');

    return (
        <div >
            <header>
                <h1>公众号文章写作工具</h1>
            </header>
            <section >
                <textarea
                    id="editor"
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    placeholder="在这里开始编写您的文章..."
                    
                />
                <div >
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
                </div>
            </section>
        </div>
    );
}