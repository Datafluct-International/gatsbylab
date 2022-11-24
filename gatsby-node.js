/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  // result from graphql is a object. We just mention to property "data"
  const { data, errors } = await graphql(
    `
    {
      allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          contentful_id
          body {
            raw
          }
          publishDate
          slug
        }
      }
    }
    `
  );

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL Query`);
    return;
  }

  const { createPage } = actions // destructuring "actions" object to take care just createPage action (a property)

  data.allContentfulBlogPost.nodes.forEach((item) => { // scan all items of blog post to create page (item)

    createPage({ // with each item, creating and routing to a page
      path: "/" + item.slug, //path of deferred page. MUST ADD slash before like this. If not, having error sometime. 
      component: require.resolve("./src/templates/using-dsg.js"), // template DSG page to fill data
      context: { post: item, $post: item }, // pass a context page property for each page
      // deffer property is marked to deffered page
      defer: item.slug !== "hello-world", // just wanting up-front 'hello-world' page. The rest pages will be deferred
    })

  });

}
