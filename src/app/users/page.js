import Link from "next/link"

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
                        <Link href={`users/${item.id}`}>{item.name}</Link>
                        <br/><br/>
                    </div>
                ))
            }
        </>
    )
}