import React, {useRef, useState} from 'react';
const styles = require('./todoform.module.css');

const TodoForm: React.FC<ComponentPropsTypes> = (props) => {

    const [string, setString] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
        }
    }

    return (
        <div>
            <h2 className={`my-class ${styles.default.alert}`}>Add Form </h2>
            <div><input ref={ref} onKeyPress={keyPressHandler} placeholder="set name and press Enter" type="text"/></div>
        </div>
    );
};

interface ComponentPropsTypes {
    onAdd(title: string): void
}

export default TodoForm;