import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { REQUIRED_TEXT } from "../../../constants";
import { useMutation } from "react-query";
import { POST_PWD_CHECK } from "../../../Apis/MarketApi";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";

const Container = styled.div`
	width: 100%;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
	margin: 0 auto;
	font-size: 2rem;
	label {
		display: block;
		width: 100%;
		text-align: center;
	}

	span {
		display: block;
		margin: 10px auto 20px;
	}
	p {
		color: #f00;
	}
`;

const PWInput = styled.input`
	padding: 10px;
	width: 100%;
	margin-bottom: 5px;
	border: 1px solid ${({ theme: { gray } }) => gray};
	margin-bottom: 10px;
	border-radius: 5px;
`;

const Button = styled.input`
	width: 250px;
	border: 1px solid ${({ theme: { headerDefault } }) => headerDefault};
	background-color: ${({ theme: { tableHeader } }) => tableHeader};
	padding: 5px 0;
	border-radius: 5px;
	color: ${({ theme: { headerDefault } }) => headerDefault};
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 2.4rem;
`;

const validSchema = yup.object().shape({
	password: yup.string().required(REQUIRED_TEXT),
});

const PwdCheckForm = ({ id }: { id: number }) => {
	const history = useHistory();
	const { setModalOpen, setSecondModalOpen } = useContext(CurrentContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PwdCheckFormValues>({
		// mode: "onChange",
		resolver: yupResolver(validSchema),
	});

	const {
		mutate: postPwdCheck,
		isLoading,
		isError,
	} = useMutation(
		({ id, formData }: { id: number; formData: FormData }) => POST_PWD_CHECK(id, formData),
		{
			onSuccess: (data) => {
				if (data.results) {
					setSecondModalOpen(false);
					setModalOpen(false);
					history.push({
						pathname: "/market/modify",
						state: {
							id,
						},
					});
				} else {
					alert(data.message);
				}
			},
			onError: (error: any) => {
				// * internal server error
				console.log(error);
			},
		}
	);

	const onSubmit: SubmitHandler<PwdCheckFormValues> = (data) => {
		const formData = new FormData();
		formData.append("password", data.password);
		postPwdCheck({ id, formData });
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="password">
					<span>??????????????? ???????????????.</span>
					<PWInput
						type="password"
						id="password"
						{...register("password")}
						placeholder="???????????? ??????"
						autoComplete="on"
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</label>
				<Button type="submit" value="??????" />
			</Form>
		</Container>
	);
};

type PwdCheckFormValues = {
	password: string;
};

export default PwdCheckForm;
