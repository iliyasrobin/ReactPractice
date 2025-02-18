

const ImmidiatelyInvoked = () => {
    let marks = 50;
    return (
        <div>
            {(()=>{
              return  marks>60 ? <h1>Good Result</h1> : <h1>Not Good</h1>
            })()}
        </div>
    );
};

export default ImmidiatelyInvoked;