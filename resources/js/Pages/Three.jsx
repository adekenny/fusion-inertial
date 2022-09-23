

const subs = [
{

    title: "Basic",
    price: "34.00",
    color: "blue",
    description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
},
{

    title: "Advanced",
    price: "74.00",
    color: "Red",
    description: [
        '12 users included',
        '3.4 GB of storage',
        'Help block access',
        'Chat support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
},

{

    title: "Gold",
    price: 94.50,
    color: "Yelow",
    description: [
        '14 advanced users included',
        '7 GB of storage',
        'Admin center access',
        'Email and Chat support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
},

]
export default function Three(){

    return(<div className="flex row-auto justify-center">
        {subs.map(sub=>(
            <div className="p-10 m-4 bg-yellow-400 rounded-md">
            <div>{sub.title}</div>
            {sub.title === "Gold" ? <div className="text-white text-lg">This is special Pakage</div> : <p>This is a normal package</p>}
            <div className="">{sub.price}</div>
            <div>{sub.color}</div>
            <div>{sub.color === 'Red' && <p className="text-red-600">You are the winner</p>}</div>
            <div>{sub.description.map(item=>(
                <ul className="pl-5">
                <li key={item.indexOf()}>{item}</li>
                </ul>
            ))}</div>
            <div>{sub.buttonText}</div>
            </div>
        ))}
    </div>)
}