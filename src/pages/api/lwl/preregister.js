export default async function handler(req, res){
    if(req.method === "POST"){
        const {email} = req.body;
        const response = await fetch("http://ec2-13-232-66-16.ap-south-1.compute.amazonaws.com/api/add-to-email-list",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        });
        const result = await response.json();
        res.status(200).json(result);
    }
}