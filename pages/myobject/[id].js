export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(mydata => {
      return {
        params: { id: mydata.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    //const res1 = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    //const data1 = await res1.json();
    //const curtime = data1.datetime;
    var currentdate = new Date(); 
    var curtime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return {
      props: { mydata: data, myTime: curtime }
    }
  }
  
  const Details = ({ mydata,myTime }) => {
    return (
      <div>
        <h1>{ mydata.name }</h1>
        <p>{ mydata.email }</p>
        <p>{ mydata.website }</p>
        <p>{ mydata.address.city }</p>
        <p>Generated at { myTime }</p>
        <p>Generated at { myTime.timezone }</p>
      </div>
    );
  }
  
  export default Details;