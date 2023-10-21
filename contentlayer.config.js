import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import GithubSlugger from  'github-slugger'

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",

  fields: {
    title:       { type: 'string',   required: true },
    description:{type:'string', required:true},
    image:       { type: 'string'},
    publishedAt:  { type: 'date',},
    updatedAt: {type:'date', required:true},
    isPublished: { type: 'boolean',  default: true },
    author:      { type: 'string',     required:true },
    tags:        { type: 'list',  of: {type:'string' }},

  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blogs/${post._raw.flattenedPath}` },

    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
      
    },
    toc: {
      type:"json",
      resolve: async(doc) => {
        const regulrExp= /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) =>{
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag?.length==1 ? "one": flag.length==2 ?  "two" : "three",
            text: content,
            slug: content? slugger.slug(content): undefined
          }
        } )
        return headings;
      }
    }
  },
}));
const codeOptions = {
  theme: 'github-dark'
} 

export default makeSource({ 
  contentDirPath: 'content/Blogs', 
  documentTypes: [Blog],
  mdx: { remarkPlugins  :[remarkGfm], rehypePlugins: [rehypeSlug,[rehypeAutolinkHeadings,{behaviour:"append"}],
  [rehypePrettyCode, codeOptions]] }

})