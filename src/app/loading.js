const Loading = () => {
    return (
        <div role='status' aria-label='Loading page' className='fixed top-0 left-0 w-full h-[3px] overflow-hidden z-[999999] bg-primary-soft'>
            <div className='route-progress h-full w-full bg-primary' />
        </div>
    )
}

export default Loading
