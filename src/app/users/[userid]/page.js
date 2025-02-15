
async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json()
    return data.result
}

export default async function UserId({params}){
    console.log("User Id :", params.userid)
    const singleUser = await getUser(params.userid)
    console.log(singleUser)
    return (
        <>
            <h1>Single User Details</h1>
            <br/><br/>
            <h2>Name : {singleUser.name}</h2>
            <h3>Age : {singleUser.age}</h3>
            <h4>Email Id : {singleUser.email}</h4>

        </>
    )
}