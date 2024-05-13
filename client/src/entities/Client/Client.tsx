interface ClientProps {
    clientName: string;
    clientAddress: string;
}

const Client = ({ clientName, clientAddress }: ClientProps) => {
    return (
        <div className="client">
            <p>{clientName}</p>
            <p>{clientAddress}</p>
        </div>
    );
};

export default Client;
