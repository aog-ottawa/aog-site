# Google Sheets Form Integration Guide

This guide explains how to connect the "Visit Us" page contact form to Google Sheets using Google Apps Script.

## Part 1: Google Apps Script Setup

### Step 1: Create or Open Your Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet or open an existing one where you want to store form submissions
3. Name your sheet (e.g., "Contact Form Submissions")

### Step 2: Add Column Headers (Recommended)

In Row 1 of your sheet, add these headers:
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone`
- E1: `Message`
- F1: `Date`

### Step 3: Create the Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse the JSON payload
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data as a new row
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone || '',
      data.message,
      data.date || ''
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
5. Name your project (e.g., "Contact Form Handler")

### Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form Submission Handler" (or any description)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (this allows the form to submit from your website)
5. Click **Deploy**
6. Review and authorize:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)** if needed
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/AKfycbx.../exec`)

## Part 2: Update Your Website

### Update the Google Script URL

1. Open `src/routes/visit/+page.svelte`
2. Find line 25 where it says:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE'` with your actual Web App URL from Step 4.7 above

Example:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

## How It Works

### Form Functionality

1. **Data Collection**: When a user fills out the form, their information is stored in the `formData` object
2. **Submission**: On submit, the form:
   - Prevents page reload
   - Disables all inputs and shows "Sending..." on the button
   - Sends data as JSON to your Google Apps Script Web App
3. **Response Handling**:
   - **Success**: Shows green success message, clears the form
   - **Error**: Shows red error message, keeps form data

### Data Flow

```
User fills form → Clicks Submit → AJAX POST request → Google Apps Script
                                                              ↓
                                                    Appends row to Sheet
                                                              ↓
User sees success/error ← JSON response with status ← Returns response
```

### Features Implemented

✅ **Asynchronous submission** - No page reload  
✅ **Loading states** - Button changes to "Sending..." while submitting  
✅ **Form validation** - Required fields (name, email)  
✅ **Visual feedback** - Success/error messages with icons  
✅ **Form reset** - Automatically clears form on success  
✅ **Disabled state** - Prevents multiple submissions  
✅ **Error handling** - Graceful error messages  
✅ **CORS support** - Works across domains  

## Testing Your Form

1. Save all changes
2. Run your development server (`npm run dev`)
3. Navigate to the Visit Us page
4. Fill out the form with test data
5. Click "Send Message"
6. Check your Google Sheet - you should see a new row with the submission

## Troubleshooting

### Form doesn't submit
- Check browser console (F12) for errors
- Verify the GOOGLE_SCRIPT_URL is correct
- Ensure the Apps Script is deployed and accessible to "Anyone"

### Gets error message every time
- Re-deploy your Apps Script
- Check the Apps Script execution log (View → Executions)
- Verify your Google Sheet has write permissions

### Data appears incorrectly
- Check column order matches the script's `appendRow()` array order
- Verify data is being sent correctly (check Network tab in browser DevTools)

## Security Considerations

- The Web App URL is public but only accepts POST requests
- Anyone can submit to your form (add rate limiting if needed)
- Consider adding spam protection (e.g., reCAPTCHA) for production
- Form validation happens on both client and server side

## Customization

### Add More Fields

1. Update `formData` in the script section (line 16-22)
2. Add corresponding input fields in the template
3. Update the Apps Script `appendRow()` to include new fields
4. Add new column headers in your Google Sheet

### Change Success/Error Messages

Edit the status message content in lines 275-286 of `+page.svelte`:
```svelte
{#if submitStatus === 'success'}
  <div class="status-message success-message">
    <p>Your custom success message here</p>
  </div>
{/if}
```

## Additional Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Svelte Documentation](https://svelte.dev/docs)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

**Version**: 1.0  
**Last Updated**: 2025-12-07