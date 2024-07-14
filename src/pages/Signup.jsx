import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Signup = () => {
    return (
        <Card className="mx-auto max-w-sm" >
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">

                    <div className="grid gap-2">
                        <Label htmlFor="full-name">First Name</Label>
                        <Input id="full-name" placeholder="Krish Mungase" className="w-full" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="krishmungase@gmail.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <div className="grid gap-2">
                        <Button variant="outline" className="w-full">
                            <FcGoogle className="mx-2 size-5" /> Continue with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                            <FaGithub className="mx-2 size-5" />Continue with Github
                        </Button>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="#" className="underline">
                        Sign in
                    </a>
                </div>
            </CardContent>
        </Card >

    )
}

export default Signup