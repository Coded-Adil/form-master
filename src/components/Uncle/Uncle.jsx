import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'Raiyan'}></Cousin>
                <Cousin name={'Kasif'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;