export const Input = (props:any) => {
    let input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type }
            { ...props.register } />
    );

    if (props.tag === 'textarea') {
        input = (
            <textarea
                placeholder = { props.placeholder }
                { ...props.register }>

            </textarea>
        );
    }

    return (<label>
        <div>
            <span className = 'error-message'>{ props.error?.message }</span>
        </div>
        { input }
    </label>
    );
};