import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
 
  var currentdate = new Date(); 
  var curtime = "Last Sync: 1 " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    curtime = "Last Build time:  " + currentdate.getHours() + ":"  
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
      <h1> { myTime }</h1>
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