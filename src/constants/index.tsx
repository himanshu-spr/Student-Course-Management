export const DropdownFilterConstant = {
    view: {
        name: "view",
        label : "View By",
        options : ["Grid", "List"]
    },
    year: {
        name: "year",
        label : "Year", 
        options : ["All Years", "1", "2", "3", "4"]
    },
    branch: {
        name: "branch",
        label : "Branch",
        options : ["All Branches", "CSE", "ME", "ECE", "EE", "CE"]
    },
    sort: {
        name: "sort",
        label : "Sort By",
        options : ["Relevance", 
        "Strength - Low to High", 
        "Strength - High to Low"]
    }
};

export const CoursesData = { "CSE102" : {
      name: "Operating Systems",
      prof: "John Doe",
      strength: 40,
      branch: "CSE",
      year: 1,
      code: "CSE102",
      credits: 9
    },
    "CSE103":
    {
      name: "Database Management System",
      prof: "John Doe",
      strength: 20,
      branch: "CSE",
      year: 1,
      code: "CSE103",
      credits: 10
    },
    "CSE104":
      {
      name: "Computer Networks",
      prof: "John Doe",
      strength: 25,
      branch: "CSE",
      year: 1,
      code: "CSE104",
      credits: 11
    },
     "CSE105":
      {
      name: "Compiler Systems",
      prof: "John Doe",
      strength: 34,
      branch: "CSE",
      year: 1,
      code: "CSE105",
      credits: 13
    },
    "CSE106":
    {
      name: "Artificial Intelligence",
      prof: "John Doe",
      strength: 36,
      branch: "CSE",
      year: 1,
      code: "CSE106",
      credits: 10
    },
    "ME103":
    {
      name: "Fluid Mechanics",
      prof: "John Doe",
      strength: 41,
      branch: "ME",
      year: 1,
      code: "ME103",
      credits: 11
    },
    "ME104":
    {
      name: "Solid Mechanics",
      prof: "John Doe",
      strength: 29,
      branch: "ME",
      year: 1,
      code: "ME104",
      credits: 12
    },
    "ME106":
    {
      name: "Material Science",
      prof: "John Doe",
      strength: 22,
      branch: "ME",
      year: 1,
      code: "ME106",
      credits: 12
    },
    "EE102":
    {
      name: "Control System Engineering",
      prof: "John Doe",
      strength: 21,
      branch: "EE",
      year: 1,
      code: "EE102",
      credits: 10
    },
    "EE103":
    {
      name: "Rotating AC Machines",
      prof: "John Doe",
      strength: 15,
      branch: "EE",
      year: 1,
      code: "EE103",
      credits: 9
    },
    "EE104":
    {
      name: "VLSI Technology and Design",
      prof: "John Doe",
      strength: 43,
      branch: "EE",
      year: 1,
      code: "EE104",
      credits: 12
    },
    "ECE102":
    {
      name: "Semiconductors",
      prof: "John Doe",
      strength: 32,
      branch: "ECE",
      year: 1,
      code: "ECE102",
      credits: 10
    },
    "ECE103":
    {
      name: "Electronics System",
      prof: "John Doe",
      strength: 26,
      branch: "ECE",
      year: 1,
      code: "ECE103",
      credits: 10
    },
    "ECE104":
    {
      name: "Analog Communication",
      prof: "John Doe",
      strength: 19,
      branch: "ECE",
      year: 1,
      code: "ECE104",
      credits: 13
    },
    "CE102":
    {
      name: "Waste Management",
      prof: "John Doe",
      strength: 31,
      branch: "CE",
      year: 1,
      code: "CE102",
      credits: 12
    },
    "CE103":
    {
      name: "Transportation Engineering",
      prof: "John Doe",
      strength: 27,
      branch: "CE",
      year: 1,
      code: "CE103",
      credits: 10
    },
    "CE104":
    {
      name: "Structural Analysis",
      prof: "John Doe",
      strength: 33,
      branch: "CE",
      year: 1,
      code: "CE104",
      credits: 13
    },
};

export const initialFilters = {
    view: "Grid",
    year: "All Years",
    branch: "All Branches",
    sort: "Relevance",
    search: ""
}