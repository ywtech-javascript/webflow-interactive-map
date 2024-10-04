const mapData = [
    {
        lat: 42.04209,
        lng: -87.70138,
        name: "Galvan, Elena (No CCAP) ",
        address: "1325 Dodge Ave",
        phone1: "847‐475‐7312",
        phone2: "847‐208‐6980",
        email: "elenahomedaycare@yahoo.com",
        website: "",
        notes: "",
    },
    {
        lat: 42.04995,
        lng: -87.70296,
        name: "Edwards, Tricia (accepts CCAP)",
        address: "1744 Brown Ave. ",
        phone1: "312‐217‐3546",
        phone2: "",
        email: "tecompany12@gmail.com",
        website: "",
        notes: "(Children ages 5‐12) ",
    },
    {
        lat: 42.02694,
        lng: -87.69655,
        name: "Edwards, Antonette (No CCAP) ",
        address: "1517 Oakton Street",
        phone1: "847‐869‐7914",
        phone2: " 847‐372‐0214 ",
        email: "a_plusdaycare@yahoo.com",
        website: "",
        notes: "",
    },
    {
        lat: 42.05425,
        lng: -87.69876,
        name: "Teen Baby Nursery @ IWSE",
        address: "2010 Dewey Ave, Evanston",
        phone1: "847-864-6945",
        phone2: "",
        email: "",
        website: "https://www.iwse.org",
        notes: "Age: 6 weeks-5 years.\n&lt;br&gt;Programs: Baby Toddler Nursery, Teen Baby Nursery, Family Support Program.\n&lt;br&gt;Full day programs available.\n&lt;br&gt;May Accept CCAP Funding.",
    },
    {
        lat: 42.03295,
        lng: -87.70076,
        name: "Clark, Erricka (Accepts CCAP)",
        address: "1807 Washington St.",
        phone1: "847-529-9874",
        phone2: "",
        email: "",
        website: "",
        notes: "",
    },
    {
        lat: 42.0357,
        lng: -87.6894,
        name: "Ahmad, Basharat",
        address: "949 Ridge Avenue",
        phone1: "847-492-8483",
        phone2: "",
        email: "lBasharat@evanstonmontessori.com",
        website: "",
        notes: "",
    },
    {
        lat: 42.02726,
        lng: -87.70319,
        name: "Campos, Noemi (No CCAP)",
        address: "1920 Warren Street",
        phone1: "847-361-9281",
        phone2: "",
        email: "lauracampos914@yahoo.com",
        website: "",
        notes: "",
    },
];

// sort the data alphabetically:
mapData.sort(function (a, b) {
    var keyA = a.name,
        keyB = b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});

export default mapData;
