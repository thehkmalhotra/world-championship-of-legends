export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, fathersName, dob, occupation, contactNumber, email, residingCountry, favorableTeam } = req.body;
        const response = await fetch("http://ec2-13-232-66-16.ap-south-1.compute.amazonaws.com/api/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                fathersName: fathersName,
                dob: dob,
                occupation: occupation,
                contactNumber: contactNumber,
                email: email,
                residingCountry: residingCountry,
                favorableTeam: favorableTeam
            })
        })
        const result = await response.json();
        res.status(200).json(result);
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}