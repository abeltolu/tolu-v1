module.exports = {
    siteMetadata: {
        title: `Tolulope Abel Adetula`,
        description: `Tolulope Abel Adetula is a software engineer and technical consultant specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
        author: `@abeltolu`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Tolulope Adetula`,
                short_name: `abeltolu`,
                start_url: `/`,
                background_color: `#020c1b`,
                theme_color: `#0a192f`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-43167001-1',
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
