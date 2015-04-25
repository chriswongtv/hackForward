# What you want the API to do:
(edit liberally; I have little experience with app design, and what is and isn't good practise.)  
(JSON?)

## User
### \* /\*
If user cookie doesn't exist, give one.  
(save info from POSTs, and autofill later posts)

## Pitch
### GET /api/pitches
 * name of pitcher
 * name of pitch
 * photo
 * short description (200 chars)

### GET, POST /api/pitches/pitch_id
(all pitch info, I don't know what that'll be)

### POST /api/pitches/pitch_id/response
 * name
 * role, skills (200 chars)
 * photo
