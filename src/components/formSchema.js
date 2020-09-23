import * as yup from "yup";

const formSchema = yup.object().shape({
	name: yup
		.string()
		.min(2, "Name must be at least 2 characters")
		.required("Last Name is Required"),
	size: yup.string().oneOf(["small", "medium", "large", "x-Large"], "Please select a size"),
	instructions: yup.string(),
});

export default formSchema;
