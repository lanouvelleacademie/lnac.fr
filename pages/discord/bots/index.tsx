import Image from "next/image";
import BotImage from "@/public/images/bot_LNAC.png";
import { Commands } from "@/lib/cmdList.js";

function Command({ name, description, options }: {name: string, description: string, options?: Array<{name: string, type: string, required?: boolean}>}) {
	return (
		<div className="my-8">
			<div className="flex w-full flex-row flex-wrap items-center gap-2 rounded-t-xl py-2 text-lg">
				<span className="font-semibold text-stone-700">/{name}</span>
				{/* <span className="font-semibold">{options ? "options " : ""}</span> */}
				{options
					? options.map((opt, i) => {
							return <code key={i}>[{opt.name}]</code>;
					  })
					: ""}
			</div>
			<div className="mb-4">
				<div className="mb-4">{description}</div>
				{/* <Image
					src={BotImage}
					alt="Bot Discord"
					className="rounded-full"
					width={15}
				/> */}
				{/* <div className="flex h-7 flex-row items-center rounded border-2 border-red-600 bg-gray-700 pr-5 text-white">
					<p className="mr-3 h-7 rounded-l border-y-2 border-red-600 bg-gray-900 px-2 pb-3">
					optName
					</p>
					<p>optType</p>
				</div> */}
				{options ? (
					<table className="mx-2 text-center">
						<thead className="">
							<tr>
								<th className="w-1/2">Option</th>
								<th className="w-1/2">Type</th>
								<th className="">Requis</th>
							</tr>
						</thead>
						<tbody>
							{options.map((option, index) => {
								return (
									<tr key={index} className="">
										<td className={option.required ? "" : ""}>{option.name}</td>
										<td className="">{option.type}</td>
										<td className="">{option.required ? "✅" : ""}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				) : (
					""
				)}
			</div>
			<hr />
		</div>
	);
}

export default function Bots() {
	return (
		<div className="container mx-auto max-w-4xl px-4 lg:px-0">
			<Image
				src={BotImage}
				alt="Bot Discord"
				className="mx-auto rounded-full shadow-xl"
				width={150}
			/>
			<h1 className="pb-24 pt-6 text-center text-5xl font-bold">
				L&apos;assistant LNAC
			</h1>

			<h2 className="mb-12 mt-2 text-3xl font-bold tracking-tight text-gray-900">
				Liste des commandes disponibles
			</h2>
			{Commands.sort((a, b) => a.name.localeCompare(b.name)).map(
				(command, index) => {
					return (
						<Command
							key={index}
							name={command.name}
							description={command.description}
							options={command.options}
						/>
					);
				},
			)}
		</div>
	);
}
