export const EMAIL_VERIFY_TEMPLATE = `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Email Verification</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  </head>
  <body>
    <div dir="ltr" style="background-color:#ffffff;">
      <table width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td align="center">
              <table bgcolor="#fad939" width="510" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td align="center" style="padding:20px;">
                      <h1 style="color:#5d541d;">Please confirm your email address</h1>
                      <h3>Thanks for Signing Up!</h3>
                      <p>To finish signing up, please confirm your email address. Below is your OTP to verify your email. Please enter it to complete the verification process.</p>
                      <p><strong>Email:</strong> {{email}}</p>
                      <a style="background:#8928c6;color:#ffffff;padding:10px 20px;text-decoration:none;border-radius:5px;display:inline-block;margin-top:10px;">{{otp}}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px;">
              <p style="font-size:14px;">Thanks,<br>Mohammad Hafeez</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`






export const OTP_TEMPLATE = `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="es-content esd-header-popover">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p10">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="580" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="es-infoblock esd-block-text">
                                              <p>
                                                Your One-Time Password (OTP) for verification on Hafeez's MERN Authentication Website.
                                              </p>
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-header">
                <tbody>
                  <tr>
                    <td align="center" class="es-adaptive esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center" class="es-header-body">
                        <tbody>
                          <tr>
                            <td bgcolor="#3d5ca3" align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l">
                              <table cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                  <tr>
                                    <td align="center" class="esd-block-text">
                                      <h1 style="color:#ffffff">Your OTP Code</h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" class="esd-block-text es-p10t es-p10b">
                                      <p style="color:#ffffff; font-size: 24px; font-weight: bold; background: #ffffff; color: #333; padding: 10px 20px; border-radius: 5px; display: inline-block;">
                                        {{otp}}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" class="esd-block-text es-p10t">
                                      <p style="color:#ffffff">This OTP is valid for only 10 minutes.</p>
                                      <p style="color:#ffffff">If you didn't request this, please ignore this email.</p>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;
