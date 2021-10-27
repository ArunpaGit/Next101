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
    var currentdate = new Date(); 
    var curtime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + " ("
                + currentdate.getTimezoneOffset() + " )";
    curtime = "Last Build time:  " + currentdate.getHours() + ":"  
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
        <h1> { myTime }</h1>
        
      </div>
    );
  }
  
  export default Details;