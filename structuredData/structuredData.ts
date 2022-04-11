const stepImage = "https://technologybear.net/assets/social/bearshare.jpeg";

const postURL = 'https://www.technologybear.net/posts/what-is-a-sitemap';

export const stepData: {[id: string]: any[]} = {
    '00001': [
        {
            "@type": "HowToStep",
            position: "1",
            name: 'Install dependency',
            text: 'Install Next-Sitemap',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "2",
            name: 'Setup configuration file',
            text: 'Create a file called next-sitemap.js and setup your configuration',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "3",
            name: 'Create package.json script',
            text: 'Create a script within package.json to create the sitemap e.g. postbuild',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "4",
            name: 'Run build script',
            text: 'Run your projects build script so that Next-sitemap will be able to run',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "5",
            name: 'Run postbuild script',
            text: 'Run the postbuild script - depending upon your Next-sitemap configuration, the sitemap files and the robots.txt file will appear within the /public folder,projects local dev server and accessing the file with a browser - For example, http://localhost:3000/sitemap.xml',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "6",
            name: 'Check that the sitemap was correctly generated',
            text: 'Test it out locally by either manually viewing that the files were generated',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "7",
            name: 'Deploy sitemap',
            text: 'Deploy your changes to the webserver, test that your sitemap is accessible.',
            url: postURL,
            image: stepImage
        },
        {
            "@type": "HowToStep",
            position: "8",
            name: 'Upload sitemap to Google Search Console',
            text: 'Go to the Google Search Console. Go to the Index section and Click on sitemaps and add a link to your sitemap.',
            url: postURL,
            image: stepImage
        },
    ],
    '00002': []
}

export const toolsData: {[id: string]: any[]}  = {
    '00001': [
        {
        "@type": "HowToTool",
        "name": "NodeJS"
        }, {
        "@type": "HowToTool",
        "name": "React"
        },{
        "@type": "HowToTool",
        "name": "NextJS"
        }
    ],
}

export const questionData: {[id: string]: any[]} = {
    "question0001": [
        {
            "@type": "Question",
            "name": "What is memoization?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>Memoization is an optimization technique that caches results of expensive function calls.</p>"
            },
        },
        {
            "@type": "Question",
            "name": "Why is memoization useful for web development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>Memoization can be useful for web application development because webpages often depend on functions calls to be complete before completing the render of a page. If a function is expensive and gets called many times, often returning the same result, memoization may be able to help.</p>"
            }
        }
    ]
}