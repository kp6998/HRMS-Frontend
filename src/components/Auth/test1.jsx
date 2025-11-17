

export default function Test()
{
    var array = [{id:1,name:"siran"},{id:6,name:"mi"},{id:5,name:"sa"}];

    const[count,setcount] = useState(0);
    

    const countCal = (id) => {

        

    }


    const result = useMemo(() => {
        countCal(count)
    ,[count]})


    return(
<div> 
<h1> count: {count} </h1>

<button> onClick={setcount(count+1)} </button>

</div>

    )


}