import type { MDXComponents } from "mdx/types";

// Estilos do corpo do post — só tokens do @theme.
export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-12 scroll-mt-24 text-h2" {...props} />,
  h3: (props) => <h3 className="mt-8 scroll-mt-24 text-h3" {...props} />,
  p: (props) => <p className="mt-4 text-foreground" {...props} />,
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-5 text-foreground marker:text-accent"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-5 text-foreground marker:text-accent-strong"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="font-medium text-heading underline underline-offset-4 transition-colors duration-200 hover:text-verde-700"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-heading" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-2 border-line-gold pl-4 text-foreground italic"
      {...props}
    />
  ),
};
