import { component$, useSignal, type PropFunction } from "@builder.io/qwik";

interface Props{
    handleClick: PropFunction,
    button: string
}

export default component$((props: Props) => 
{
    const clicked = useSignal(false)

    return (
        <button 
            style={clicked.value ? { background: '#D6DCA2', border: '0', fontWeight: '600', width: '105%' } : {}} 
            onClick$={() => { 
                props.handleClick()
                clicked.value = !clicked.value
            }}
        >
            {props.button}
        </button>
    )
})