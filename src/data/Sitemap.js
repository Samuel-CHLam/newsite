const Sitemap = [
    {title: "Research", path:"/research", localpath: true, subpages: []},
    {title: "Teaching", path:"/teaching", localpath: true, subpages: [
        {title: "Teaching Pages", localpath: true, path: "/teaching"},
        {title: "Imperial Wiki", localpath: true, path: ""}
    ]},
    {title: "Religion", localpath: true, path:"/christian", subpages: []},
    {title: "Non-Academic", localpath: true, path:"/eca", subpages: []},
    {title: "Curriculum Vitae", localpath: true, path:"/cv", subpages: [
        {title: "Curriculum Vitae", localpath: true, path: "/cv"},
        {title: "Writings", localpath: true, path: "/publications"},
        {title: "UG Programme", localpath: true, path: ""},
    ]},
    {title: "Masterplan 2022", localpath: false, path:"https://samuel-chlam.github.io/masterplan-2022/"},
]

export default Sitemap