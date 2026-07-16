# Create PowerPoint instance
$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = 1 # Make it visible to avoid issues with some Office versions

# Create a new presentation
$pres = $ppt.Presentations.Add()

# Set layout size to widescreen (16:9)
$pres.SlideSize.Type = 11 # ppSlideSizeOnScreen16x9

# Slides data
$slidesData = @(
    @{
        Image = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\spiderman_batman_rooftop.jpg";
        Audio = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\scene1.wav";
        Duration = 12
    },
    @{
        Image = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\spiderman_batman_action.jpg";
        Audio = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\scene2.wav";
        Duration = 12
    },
    @{
        Image = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\spiderman_batman_allies.jpg";
        Audio = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\scene3.wav";
        Duration = 10
    }
)

for ($i = 0; $i -lt $slidesData.Length; $i++) {
    $data = $slidesData[$i]
    $slide = $pres.Slides.Add($i + 1, 12) # 12 = ppLayoutBlank
    
    # Add Image
    # AddPicture(FileName, LinkToFile, SaveWithDocument, Left, Top, Width, Height)
    $pic = $slide.Shapes.AddPicture($data.Image, 0, 1, 0, 0, 960, 540)
    
    # Add Audio
    $audioShape = $slide.Shapes.AddMediaObject2($data.Audio, 0, 1, 10, 10, 100, 100)
    
    # Configure Audio to play automatically in slide show
    $playSettings = $audioShape.AnimationSettings.PlaySettings
    $playSettings.PlayOnEntry = 1 # msoTrue
    $playSettings.HideWhileNotPlaying = 1 # msoTrue
    
    # Configure Slide Transition Timing
    $slide.SlideShowTransition.AdvanceOnTime = 1 # msoTrue
    $slide.SlideShowTransition.AdvanceTime = $data.Duration
}

# Export Video path
$videoPath = "C:\Users\Lavanya\Desktop\mern_stack\HTML\files\spiderman_batman_crossover.mp4"

# CreateVideo(FileName, UseSlideTimingsAndNarrations, DefaultSlideDuration, VertResolution, FramesPerSecond, Quality)
$pres.CreateVideo($videoPath, $true, 5, 720, 30)

Write-Host "Exporting video..."
# Wait for export to finish
# ppVideoStatusInProgress = 1, ppVideoStatusQueued = 2
while ($pres.CreateVideoStatus -eq 1 -or $pres.CreateVideoStatus -eq 2) {
    Start-Sleep -Seconds 1
    Write-Host "Status: $($pres.CreateVideoStatus)"
}

Write-Host "Video export completed!"

# Close and Clean Up
$pres.Saved = 1 # Mark as saved so it doesn't prompt
$pres.Close()
$ppt.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppt) | Out-Null
Remove-Variable ppt
