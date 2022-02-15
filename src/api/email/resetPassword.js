require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.sendgrid_key)
module.exports = (to, link, text) => {
	// let random = Math.floor(Math.random()*100000)
	let random = Date.now()
	// let message = (title,body) => {return  `
	let message = (link) => {
		return `
		<!DOCTYPE html>
		<html>
		<head>
			<title></title>
		</head>
		<body>
		
					<div style="box-sizing:border-box;display:block;max-width:600px;margin:0 auto;padding:10px">
		
					<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
		
						<tbody>
		
							<tr>
		
								<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;text-align:left" valign="top" align="left"><span><a href="https://www.mansourapp.com/" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none"><img alt="Mansour" src="http://cdn.mcauto-images-production.sendgrid.net/c2ca16ab7d94e337/db74ffe8-7801-488e-818a-63d059f1794f/500x500.png" style="max-width:100%;border-style:none;height:137px;width:137px" class="CToWUd" width="137" height="137"></a></span></td>
		
							</tr>
		
						</tbody>
		
					</table>
		
		
					<div style="box-sizing:border-box;width:100%;margin-bottom:30px;background:#ffffff;border:1px solid #f0f0f0">
		
					<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
		
						<tbody>
		
							<tr>
		
								<td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding:30px" valign="top">
		
								<table style="box-sizing:border-box;width:100%;border-spacing:0;border-collapse:separate!important" width="100%">
		
									<tbody>
		
										<tr>
		
											<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
		
											<h2 style="margin:0;margin-bottom:30px;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;line-height:1.5;font-size:24px;color:#294661!important">Reset Password<br>
		
											</h2>
		
		
		
											<p style="margin:0;margin-bottom:30px;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;font-weight:300">Click the button below to reset your password.</p>
		
											</td>
		
										</tr>
		
										<tr>
		
											<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top" valign="top">
		
											<table style="box-sizing:border-box;border-spacing:0;width:100%;border-collapse:separate!important" width="100%" cellspacing="0" cellpadding="0">
		
												<tbody>
		
													<tr>
		
														<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;padding-bottom:15px" valign="top" align="center">
		
														<table style="box-sizing:border-box;border-spacing:0;width:auto;border-collapse:separate!important" cellspacing="0" cellpadding="0">
		
															<tbody>
		
																<tr>
		
																	<td style="box-sizing:border-box;padding:0;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:16px;vertical-align:top;background-color:#348eda;border-radius:2px;text-align:center" valign="top" bgcolor="#348eda" align="center"><a href="${link}" style="box-sizing:border-box;border-color:#348eda;font-weight:400;text-decoration:none;display:inline-block;margin:0;color:#ffffff;background-color:#348eda;border:solid 1px #348eda;border-radius:2px;font-size:14px;padding:12px 45px" target="_blank">Reset Your Password</a></td>
		
																</tr>
		
															</tbody>
		
														</table>
		
														</td>
		
													</tr>
		
												</tbody>
		
											</table>
		
											</td>
		
										</tr>
		
									</tbody>
		
								</table>
		
								</td>
		
							</tr>
		
						</tbody>
		
					</table>
					</div>
					<div style="box-sizing:border-box;clear:both;width:100%">
					<table style="box-sizing:border-box;width:100%;border-spacing:0;font-size:12px;border-collapse:separate!important" width="100%">
						<tbody>
							<tr style="font-size:12px">
								<td style="box-sizing:border-box;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;vertical-align:top;font-size:12px;text-align:center;padding:20px 0" valign="top" align="center"><span style="float:none;display:block;text-align:center"><a href="https://www.mansourapp.com/" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none"><img alt="Mansour" src="http://cdn.mcauto-images-production.sendgrid.net/c2ca16ab7d94e337/db74ffe8-7801-488e-818a-63d059f1794f/500x500.png" style="max-width:100%;border-style:none;font-size:12px;height:91;width:91px" class="CToWUd" width="91" height="91"></a></span>
								<p style="margin:0;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;font-size:12px;margin-bottom:5px">&copy; 2021 Mansour Technology 470 Noor Ave S San Francisco, CA 94080</p>
						<p style="margin:0;color:#294661;font-family:'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-weight:300;font-size:12px;margin-bottom:5px"> <a href="https://twitter.com/mansour76813891" style="box-sizing:border-box;color:#348eda;font-weight:400;text-decoration:none;font-size:12px;padding:0 5px" target="_blank" >Twitter</a></p>
						<p><span style="opacity: 0"> ${random} </span></p>
								</td>
							</tr>
						</tbody>
					</table>
					</div>
					</div>
		</body>
		</html>
		`}

	const msg = {
		// to: 'osamamostafahafez@gmail.com', // Change to your recipient
		// from: 'Mansour <support@mansourapp.com>', // Change to your verified sender
		// subject: 'Sending with SendGrid is Fun',
		// text: 'and easy to do anywhere, even with Node.js',
		to, // Change to your recipient
		from: 'Mansour <support@mansourapp.com>', // Change to your verified sender
		subject: 'Reset Password',
		text,
		html: message(link),
		//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		//   html: '<strong style="box-sizing:border-box">and easy to do anywhere, even with Node.js</strong>',
		// html: `${div}`,
		// html:message('Congrats',"Your Registration has been accepted."),
		// html:message(title,body),
	}
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent')
		})
		.catch((error) => {
			console.error(error)
		})
}
	