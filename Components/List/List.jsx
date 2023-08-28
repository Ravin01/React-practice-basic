/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const List = ({names}) => {
    // eslint-disable-next-line react/jsx-key
    return (
        <>
            {names.map((name)=> 
                <div>
                    <p>{name.name}</p>
                    <p>{name.age}</p>
                </div>
            )}
        </>
    )
};


export default List;