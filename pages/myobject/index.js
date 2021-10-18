import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
 // const res1 = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
 // const data1 = await res1.json();
  //const curtime = data1.datetime;\
  var currentdate = new Date(); 
  var curtime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  return {
    props: { mydatas: data, myTime: curtime }
  }
}

const Mydatas = ({ mydatas, myTime }) => {
  
  return (
    <div>
      <h1>All Data</h1>
      <h3>Page Buid at { myTime }</h3>
      {mydatas.map(mydata => (
        <Link href={'/myobject/' + mydata.id} key={mydata.id}>
          <a className={styles.single}>
            <h3>{ mydata.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
export default Mydatas;