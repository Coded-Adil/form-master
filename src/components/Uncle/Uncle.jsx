import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Raiyan'}></Cousin>
                <Cousin name={'Kasif'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;