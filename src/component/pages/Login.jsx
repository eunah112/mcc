import {React, useState, useEffect} from "react";

export default function Login() {
	const User = {
		id: "test1234",
		pw: "test1234@@",
	};
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [idValid, setIdValid] = useState(false);
	const [pwValid, setPwValid] = useState(false);
	const [notAllow, setNotAllow] = useState(true);

	useEffect(() => {
		if (idValid && pwValid) {
			setNotAllow(false);
			return;
		}
		setNotAllow(true);
	}, [idValid, pwValid]);

	const confirmMessage = () => {
		if (id === User.id && pw === User.pw) {
			alert("로그인에 성공했습니다.");
		} else {
			alert("등록되지 않은 회원입니다.");
		}
	};

	const handleIdChange = (e) => {
		setId(e.target.value);
		console.log("입력완료");
		const regex = /^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$/;
		if (regex.test(e.target.value)) {
			setIdValid(true);
		} else {
			setIdValid(false);
		}
	};

	const handleIPwChange = (e) => {
		setPw(e.target.value);
		console.log("입력완료");
		const regex = /^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$/;
		if (regex.test(e.target.value)) {
			setPwValid(true);
		} else {
			setPwValid(false);
		}
	};

	return (
		<div className='pt-[50px] w-1/4 mx-auto'>
			<div className='text-[30px] pt-[10px] w-full'>
				<span className='font-bold'>
					아이디와 비밀번호를
					<br />
					입력해주세요
				</span>
			</div>
			<div className='flex flex-col py-[20px]'>
				<div className='flex flex-col py-[10px]'>
					<span className='pb-[10px]'>
						<b>아이디</b>
					</span>
					<input
						value={id}
						name='id'
						className='w-full h-[58px] border-[1px] border-[#D1D1D1] rounded-[10px] px-[20px] placeholder-gray-300'
						placeholder='test1234'
						type='text'
						onChange={handleIdChange}
					/>
				</div>
				{id.length > 0 && !idValid && (
					<div className='text-[16px] text-[red] mt-2'>
						영문, 숫자 포함 6자 이상 입력해주세요
					</div>
				)}
				<div className='flex flex-col py-[10px]'>
					<span className='pb-[10px]'>
						<b>비밀번호</b>
					</span>
					<input
						value={pw}
						name='pw'
						className='w-full h-[58px] border-[1px] border-[#D1D1D1] rounded-[10px] px-[20px] placeholder-gray-300'
						placeholder='영문, 숫자, 특수문자 포함 8자 이상'
						type='text'
						onChange={handleIPwChange}
					/>
				</div>
				{pw.length > 0 && !pwValid && (
					<div className='text-[16px] text-[red] mt-2'>
						영문, 숫자 포함 6자 이상 입력해주세요
					</div>
				)}
				<div className='pt-[20px]'>
					<button
						onClick={confirmMessage}
						disabled={notAllow}
						className='w-full  text-[white] h-[50px] bg-[#2C6CF0] disabled:bg-[#dadada] disabled:text-white  border-[1px] border-[#2C6CF0] rounded-[30px] py-[10px]'
					>
						<b>확인</b>
					</button>
				</div>
			</div>
		</div>
	);
}
