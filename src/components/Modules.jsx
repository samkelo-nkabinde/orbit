import Styles from './Modules.module.css'

function Modules() {
    return (
        <>
            <h1 className={Styles.heading}>Modules</h1>
            <table className={Styles.table}>
                {/* Table Heading */}
                <tr >
                    <th>Name</th>
                    <th>Credits</th>
                    <th>About</th>
                </tr>

                <tr>
                    <td>Computer Science 343</td>
                    <td>16</td>
                    <td>Web Development and Databases</td>
                </tr>

                <tr>
                    <td>Computer Science 344</td>
                    <td>16</td>
                    <td>Software Engineering</td>
                </tr>

                <tr>
                    <td>Statistics 348</td>
                    <td>24</td>
                    <td>Finding probability of success and Time series</td>
                </tr>

                <tr>
                    <td>Operation Research</td>
                    <td>15</td>
                    <td>Optimization of linear models</td>
                </tr>
            </table>
        </>
    );
}

export default Modules