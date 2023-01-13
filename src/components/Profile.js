function Profile() {
    return (
        <div>
            <Salary name="Felix" jobs="Frontend Developer" email="Felix@gmail.com" />
            <Salary name="Feli" jobs="Backend Developer" email="Feli@gmail.com" />
            <Salary name="Fel" jobs="Backend Developer" email="Fel@gmail.com" />
        </div>

    )
}

const Salary = (props) => {
    return (
        <div>
            <h1> {props.name} {props.jobs} {props.salary} {props.email} </h1>
        </div>
    )
}

export default Profile;