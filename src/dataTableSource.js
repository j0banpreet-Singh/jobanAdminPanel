export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70
    },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg"></img>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email",
        headerName:"Email",
        width:230
    },
    {
        field:"age",
        headerName:"Age",
        width:100
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]
export const userRows = [
    {
        id: 1,
        username: "jobanpreet singh",
        img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        status: "active",
        email: "jobanarora678@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "jane Doe",
        img: "https://images.unsplash.com/photo-1511424187101-2aaa60069357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9ob2dpcmx8ZW58MHx8MHx8&w=1000&q=80",
        email: "janedoe@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        email: "3snow@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://m6z7h4r5.stackpathcdn.com/wp-content/uploads/2020/06/InStyle.jpg",
        email: "4snow@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://www.shutterstock.com/image-photo/casually-handsome-confident-young-man-260nw-439433326.jpg",
        email: "5snow@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?b=1&s=170667a&w=0&k=20&c=CVpXibLIGjpa2_sFFgt_ejrz06ULDMZy0ylqK-VnZRU=",
        email: "6snow@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://media.gettyimages.com/id/1250238624/photo/handsome-young-adult-businessman-with-stubble.jpg?s=612x612&w=gi&k=20&c=H2upefy-mU5MNlNhuXDyTboEmTMycZM-FcK4jYXx2TU=",
        email: "7snow@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
        email: "8snow@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://www.shutterstock.com/image-photo/handsome-man-spectacles-portrait-260nw-606177383.jpg",
        email: "snow@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://www.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg",
        email: "snow@gmail.com",
        status: "active",
        age: 65,
    },
];
