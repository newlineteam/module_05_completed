import TextInput from "./components/TextInput";
import "./App.css";
import { useState } from "react";

export default function App() {
	const [value, setValue] = useState("");

	return (
		<>
			<h1>TextInput Component</h1>
			<main>
				<TextInput
					id="email-input"
					label="Email address"
					placeholder="test@email.com"
					type="email"
					value={value}
					onChange={setValue}
				/>
			</main>
		</>
	);
}
