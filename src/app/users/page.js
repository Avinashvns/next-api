
async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json()
    return data
}

export default async function Users(){
    const userData = await getUsers()
    console.log("Hi Users : ",userData)
    return(
        <>
            <h1>User List</h1>
            <br/>
            {
                userData.map((item)=>(
                    <div key={item.id}>
                        <h1>Id : {item.id}</h1>
                        <h2>Name : {item.name}</h2>
                        <h3>Age : {item.age}</h3>
                        <h4>Email : {item.email}</h4>
                        <br/>
                    </div>
                ))
            }
        </>
    )
}